import React, {
  useState, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { List } from '@material-ui/core';

import { Organizations } from '../';
import { getCurrentUserOrgs } from '../../core';

const useStyles = makeStyles(() => ({
  root: {
    overflow: 'auto',
    height: '100%',
  },
}));

function CurrentUserOrganizations({
  onOrganization,
  authentication,
}) {
  const classes = useStyles();
  const [organizations, setOrganizations] = useState([]);
  const getData = useCallback(async () => {
    if (authentication && authentication.config) {
      const userOrgs = await getCurrentUserOrgs({ config: authentication.config });
      setOrganizations(userOrgs);
    }
  }, [authentication]);

  useEffect(() => {
    if (authentication) {
      getData();
    }
  }, [authentication, getData]);
  return (authentication && organizations.length) ? (<List className={classes.root}>
    <Organizations
      organizations={organizations}
      onOrganization={onOrganization}
      config={authentication.config}
    />
  </List>) : <div />;
}

CurrentUserOrganizations.propTypes = {
  /** Pass a previously returned authentication object to bypass login. */
  authentication: PropTypes.shape({
    user: PropTypes.object.isRequired,
    token: PropTypes.object.isRequired,
    config: PropTypes.object.isRequired,
    remember: PropTypes.bool,
  }).isRequired,
  /** Function to call when organization is selected. */
  onOrganization: PropTypes.func.isRequired,
  /** Configuration required if paths are provided as URL. */
  config: PropTypes.shape({ server: PropTypes.string.isRequired }).isRequired,
};

export default CurrentUserOrganizations;
