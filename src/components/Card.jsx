export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      <img src={`../images/${props.card.coverImg}`} className="card--img"></img>
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--rating">
        <img src="../images/star.png" className="card--rating--img"></img>
        <p>
          {props.card.stats.rating}{" "}
          <span style={{ color: "#918E9B" }}>
            ({props.card.stats.reviewCount}) • {props.card.location}
          </span>
        </p>
      </div>
      <p>{props.card.title}</p>
      <p>
        <span style={{ fontWeight: "700" }}>From ${props.card.price}</span>{" "}
        person
      </p>
    </div>
  );
}
