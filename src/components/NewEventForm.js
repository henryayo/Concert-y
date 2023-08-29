import "./NewEventForm.css";
import { useState } from "react";

export default function NewEventForm({ addEvent }) {
  const [artist, setArtist] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("New York");

  const resetForm = () => {
    setArtist("");
    setDate("");
    setLocation("New York");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      artist: artist,
      date: date,
      location: location,
      id: Math.floor(Math.random() * 10000),
    };

    addEvent(event);
    resetForm();
  };

  return (
    <form className="new-event-form" onSubmit={handleSubmit}>
      <label>
        <span>Artist:</span>
        <input
          type="text"
          onChange={(e) => setArtist(e.target.value)}
          value={artist}
        />
      </label>
      <label>
        <span>Event Date:</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Event Location:</span>
        <select onChange={(e)=> setLocation(e.target.value)}>
          <option value="New York">New York</option>
          <option value="Toronto">Toronto</option>
          <option value="Montreal">Montreal</option>
          <option value="Vancouver">Vancouver</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="San Francisco">San Francisco</option>
        </select>
      </label>
      <button>Submit</button>
    </form>
  );
}
