
import "./Card.css";

const Card = ({ title, value, icon, color }) => {
  return (
    <div className="card" style={{ borderTop: `4px solid ${color || "#3b82f6"}` }}>
      <div className="card-header">
        <h4>{title}</h4>
        {icon && <span className="card-icon">{icon}</span>}
      </div>
      <p className="card-value">{value}</p>
    </div>
  );
};

export default Card;
