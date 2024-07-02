//add function here
function formatName(user){
  return user.firstName + ' ' + user.lastnName;
}

const user= {
  firstName: 'west',
  lastName: 'Cliff'
};

  const element = <h1>Hello, {formatName(user)}!</h1>;
  
  ReactDOM.render(element, document.getElementById('root'));