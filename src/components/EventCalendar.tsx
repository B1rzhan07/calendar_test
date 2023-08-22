import { FC } from 'react';
import { Button, Calendar } from 'antd';
import { formatDate } from '../utils/date';
import { ICalendar } from '../models/ICalendar';
import dayjs from 'dayjs';
import { useAppDispatch } from '../hooks/storeHooks';
import { removeEvent } from '../store/slices/guestSlice';
interface CalendarProps {
  events: ICalendar[];
}

const EventCalendar: FC<CalendarProps> = (props) => {
  const dispatch = useAppDispatch();

  function dateCellRender(value: dayjs.Dayjs) {
    const formatedDate = formatDate(value.toDate());
    const currentDayEvents = props.events.filter((ev) => ev.date === formatedDate);

    return (
      <div>
        {currentDayEvents.length > 0 && (
          <Button
            onClick={() => {
              dispatch(removeEvent(formatedDate));
            }}
          >
            Remove
          </Button>
        )}
        {currentDayEvents.map((ev, index) => (
          <>
            <div key={index}>
              <b>Description</b>: {ev.description}
            </div>
            <div>
              <b>Author: </b>
              {ev.author}
            </div>
            <div>
              <b>Guest:</b> {ev.guest}
            </div>
          </>
        ))}
      </div>
    );
  }

  return <Calendar cellRender={dateCellRender} />;
};

export default EventCalendar;
