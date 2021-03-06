import ActionPages from '../../../types/enums/ActionPages';
import { IActionPage, IDataCrew } from '../../../types/redux/pages';

const setCrew = (payload: IDataCrew[]): IActionPage => ({
  type: ActionPages.SUCCESS_CREW_DATA_PAGE,
  payload,
});

export default setCrew;
