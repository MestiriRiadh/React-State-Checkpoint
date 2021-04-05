export default function Profile({
  person: { imgSrc, fullName, bio, profession },
}) {
  return (
    <div>
      <img src={imgSrc} width="100" />
      <h1>{fullName}</h1>
      <h1>{bio}</h1>
      <h1>{profession}</h1>
    </div>
  );
}
