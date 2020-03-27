import React, {
  useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import deepFreeze from 'deep-freeze';

import {
  getContentFromFile, saveFile, ensureFile, deleteFile,
} from './helpers';
import {
  FileCard, FileForm, useBlob,
} from '..';

function useFile({
  authentication,
  repository,
  filepath,
  onFilepath,
  defaultContent,
  config,
  file: __file,
  onFile,
  create=false,
}) {
  const file = __file && deepFreeze(__file);
  const [blob, setBlob] = useState();
  const branch = repository && (repository.branch || repository.default_branch);

  const [deleted, setDeleted] = useState();

  const {
    state: blobState, actions: blobActions, components: blobComponents,
  } = useBlob({
    blob, onBlob: setBlob, config, repository, filepath,
  });

  const { push: writeable } = (repository && repository.permissions) ? repository.permissions : {};

  const update = useCallback((_file) => {
    onFile(_file);
  }, [onFile]);

  const read = useCallback(async (_filepath) => {
    onFilepath && await onFilepath(_filepath);
  }, [onFilepath]);

  const load = useCallback(async () => {
    if (config && repository && filepath) {
      const _file = await ensureFile({
        filepath, defaultContent, authentication, config, repository, branch,
      });
      const content = await getContentFromFile(_file);

      update({
        ..._file, branch, content, filepath: _file.path,
      });
    }
  }, [authentication, branch, config, defaultContent, filepath, repository, update]);

  const close = useCallback(() => {
    if (blobActions && blobActions.close) {
      blobActions.close();
    }
    update();
  }, [update, blobActions]);

  const save = useCallback(async (content) => {
    if (writeable) {
      await saveFile({
        authentication, repository, branch, file, content,
      });
      await load();
    }
  }, [writeable, authentication, repository, branch, file, load]);

  const dangerouslyDelete = useCallback(async () => {
    if (writeable) {
      const _deleted = await deleteFile({
        authentication, repository, file, branch,
      });

      if (_deleted) {
        setDeleted(true);
      }
    };
  }, [file, authentication, branch, repository, writeable]);

  useEffect(() => {
    const notLoaded = (!file && filepath && !deleted);
    const loadNew = (file && filepath && file.filepath !== filepath);

    if (notLoaded || loadNew) {
      load();
    }
  }, [deleted, filepath, load, file]);

  const blobFilepath = blobState && blobState.filepath;

  useEffect(() => {
    if (blobFilepath) onFilepath(blobFilepath);
  }, [blobFilepath, onFilepath]);

  useEffect(() => { // if there is a file but no repository, close file.
    if (!repository && file) {
      close();
    }
  }, [repository, file, close]);

  useEffect(() => {
    if (deleted) {
      close();
      setDeleted(false);
    };
  }, [deleted, close]);

  const actions = {
    update,
    load,
    read,
    save,
    close,
    dangerouslyDelete,
  };


  const createSubmit = useCallback(({ branch, filepath, defaultContent }) => {
    read(filepath);
  }, [read]);

  const components = {
    create: repository && <FileForm onSubmit={() => {}} />,
    browse: repository && blobComponents.browse,
    fileCard: repository && file && (
      <FileCard
        authentication={authentication}
        repository={repository}
        file={{ ...file, ...actions }}
      />
    ),
  };

  let component = <></>;

  if (file) {
    component = components.fileCard;
  } else if (!filepath) {
    if (create) {
      component = components.create;
    } else {
      component = components.browse;
    }
  }

  return {
    state: file,
    actions,
    component,
    components,
  };
};

useFile.propTypes = {
  /** Pass a previously returned file object to bypass the selection. */
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    sha: PropTypes.string.isRequired,
    download_url: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }),
  /** Function to propogate when the Blob is selected. */
  onFile: PropTypes.func,
  /** The full filepath for the file. */
  filepath: PropTypes.string,
  /** Authentication object returned from a successful withAuthentication login. */
  authentication: PropTypes.shape({
    config: PropTypes.shape({
      server: PropTypes.string.isRequired,
      headers: PropTypes.shape({ Authorization: PropTypes.string.isRequired }).isRequired,
    }).isRequired,
    user: PropTypes.shape({
      username: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    }).isRequired,
  }),
  /** Repository tree_url can be used in place of blobConfig */
  repository: PropTypes.shape({
    owner: PropTypes.shape({ username: PropTypes.string.isRequired }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  /** use a form to create a new file */
  create: PropTypes.bool,
};

export default useFile;
