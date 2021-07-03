import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';

import { readEvents } from '../actions';

const EventsIndex = props => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.events);
  
  const renderEvents = () => {
    return _.map(events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  useEffect(() => {
    dispatch(readEvents());
  }, [dispatch]);

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          { renderEvents() }
        </tbody>
      </table>
      <Link to="events/new">New Event</Link>
    </React.Fragment>
  )
}

export default EventsIndex;