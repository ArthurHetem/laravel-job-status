import Config from "src/utils/config";

const generateUrl = (path: string): string => {
  const domain = Config.get().domain ?? '';
  const prePath = Config.get().path;

  return domain + (domain.endsWith('/') ? '' : '/') +
    prePath + (prePath.endsWith('/') ? '' : '/')

    + 'api/'
    + path;
}

export const dashboard = generateUrl('dashboard');
export const jobList = generateUrl('tracked-job');
export const jobShow = (alias: string) => generateUrl('tracked-job/' + alias);
export const runShow = (jobStatusId: number) => generateUrl('job-run/' + jobStatusId.toString());
export const history = generateUrl('history');
export const signal = (jobStatusId: number) => generateUrl('signal/' + jobStatusId.toString());
export const batchList = generateUrl('batch');
export const batchShow = (batchId: number) => generateUrl('batch/' + batchId.toString());
