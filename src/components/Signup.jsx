export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault();
    alert('Submitting!');
  }

  return (
    <form>
      <input />
      <button onClick={handleSubmit}>Send</button>
    </form>
  );
}