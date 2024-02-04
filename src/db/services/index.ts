import { ITabContent } from '../../types/ITabContent';
import webService from './webServices.json';
import videoServices from './videoServices.json';
import designServices from './designServices.json';
import marketingServices from './marketingServices.json';

const web = webService as ITabContent;
const video: ITabContent = videoServices as ITabContent;
const design: ITabContent = designServices as ITabContent;
const marketing: ITabContent = marketingServices as ITabContent;

export { web, video, design, marketing };
