import { ITabContent } from '../../types/ITabContent';
import webService from './webServices.json';
import videoServices from './videoServices.json';
import designServices from './designServices.json';

const web: ITabContent = webService;
const video: ITabContent = videoServices;
const design: ITabContent = designServices;

export { web, video, design };
