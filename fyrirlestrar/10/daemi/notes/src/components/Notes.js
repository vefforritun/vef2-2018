import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions/notes';

import Note from './Note';

class Notes extends Component {

  state = {
    visibleNote: null,
  }

  onHeaderClick = (noteId) => {
    return (e) => {
      const visibleNote = this.state.visibleNote === noteId ? null : noteId;
      this.setState({ visibleNote });
    }
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNotes());
  }

  render() {
    const { isFetching, notes } = this.props;

    if (isFetching) {
      return (
        <p>Sæki minnisatriði..</p>
      );
    }

    return (
      <section>
        <h2>Minnisatriði</h2>
        <ul>
          {notes.map((note) => {
            console.log('Render', note.id, 'visible note = ', this.state.visibleNote)
            return (
              <Note
                key={note.id}
                title={note.title}
                text={note.text}
                datetime={note.datetime}
                visible={this.state.visibleNote === note.id}
                onHeaderClick={(this.onHeaderClick(note.id))}
              />
            )
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.notes.isFetching,
    notes: state.notes.notes,
    error: state.notes.error,
  }
}

export default connect(mapStateToProps)(Notes);
