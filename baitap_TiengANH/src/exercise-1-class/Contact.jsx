export default function Contact({ contact, onDelete }) {
  return (
    <li className="card">
      <div className="info first">
        <h2>{contact.firstName}</h2>
        <span className="title">{contact.lastName}</span>
      </div>

      <div className="info">
        <span className="title">Phone: </span>
        <span className="content">{contact.phone}</span> 
      </div>
      <div className="info">
        <span className="title">Address: </span>
        <span className="content">{contact.address}</span> 
      </div>
      <div className="info">
        <button className="btn" onClick={onDelete}>Delete</button>
      </div>
    </li>
  );
}
