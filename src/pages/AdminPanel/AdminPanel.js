import React from 'react';
import { HydraAdmin } from '@api-platform/admin';
import * as AuthApi from '../../Auth.api.js';

export default () => <HydraAdmin entrypoint={AuthApi.SERVER + `/api`} />;
