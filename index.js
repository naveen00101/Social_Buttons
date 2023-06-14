const Button = (props) => {
  //  Write your code here.
  {className, content} = props;
  return(
      <button className= {className}>{content}</button>
  )
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1>Social Buttons</h1>
    <div className="button-container">
      <Button className="like" content = "Like"></Button>
      <Button className="comment" content="Comment"></Button>
      <Button className="share" content="Share"></Button>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
