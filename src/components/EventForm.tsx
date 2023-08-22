import { FC } from 'react';
import { Button, DatePicker, Form, Input, Row, Select } from 'antd';

import { formatDate } from '../utils/date';
import { ICalendar } from '../models/ICalendar';
import dayjs from 'dayjs';
import { IUser } from '../models/IUser';

interface EventFormProps {
  guests: IUser[];
  submit: (event: ICalendar) => void;
  event: ICalendar;
  setEvent: (event: ICalendar) => void;
}

const EventForm: FC<EventFormProps> = (props) => {
  const selectDate = (date: dayjs.Dayjs | null) => {
    if (date) {
      props.setEvent({ ...props.event, date: formatDate(date.toDate()) });
    }
  };
  const submitForm = () => {
    props.submit({ ...props.event, author: 'admin' });
  };

  return (
    <Form onFinish={submitForm}>
      <Form.Item label="Описание события" name="description">
        <Input
          onChange={(e) => props.setEvent({ ...props.event, description: e.target.value })}
          value={props.event.description}
        />
      </Form.Item>
      <Form.Item label="Дата события" name="date">
        <DatePicker onChange={(date) => selectDate(date)} value={dayjs(props.event.date)} />
      </Form.Item>
      <Form.Item label="Выберите гостя" name="guest">
        <Select
          onChange={(guest: string) => props.setEvent({ ...props.event, guest })}
          value={props.event.guest}
        >
          {props?.guests?.map((guest) => (
            <Select.Option key={guest.email} value={guest.email}>
              {guest.email}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
