

const Jsx4 = () => {

    const isAdmin = true;
    let content ="";
    
    if (isAdmin){
        content = <div>Admin User</div>
    }else{
        content = <div>User</div>
    }
  return (
    <div>{content}</div>
  )
}

export default Jsx4