import { Button, Layout, Modal, Row } from 'antd';
import EventCalendar from '../components/EventCalendar';
import { FC, useState } from 'react';
import { ICalendar } from '../models/ICalendar';
import EventForm from '../components/EventForm';
import { useAppDispatch, useAppSelector } from '../hooks/storeHooks';
import { setEvents } from '../store/slices/guestSlice';
import { users } from '../../users.json';
const Calendar: FC = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const addNewEvent = (event: ICalendar) => {
    setModalVisible(false);
    dispatch(setEvents([event]));
  };
  const { events } = useAppSelector((state) => state.guest);

  // const { data } = useGetUserQuery('');
  // console.log(data);
  const data = users;
  console.log(data);

  const [event, setEvent] = useState<ICalendar>({
    author: '',
    date: '',
    description: '',
    guest: '',
  } as ICalendar);

  return (
    <Layout>
      <EventCalendar events={events} />
      <Row justify="center">
        <Button
          style={{
            marginTop: '10px',
          }}
          onClick={() => setModalVisible(true)}
        >
          Добавить событие
        </Button>
      </Row>
      <Modal
        title="Добавить событие"
        open={modalVisible}
        footer={null}
        onCancel={() => {
          setModalVisible(false);
          setEvent({ author: '', date: '', description: '', guest: '' });
        }}
      >
        <EventForm guests={data} submit={addNewEvent} event={event} setEvent={setEvent} />
      </Modal>
    </Layout>
  );
};

export default Calendar;
