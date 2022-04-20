import Multiple from '../multiple/Multiple'
import ListCard from '../cards/ListCards'

function Chat(users) {
    console.log(users)
  return (
    <>
      <div className='chat'>
        <div className='answer'>
          <div className='user'></div>
          <div className='user-answer'>Hola, nuestra empresa quiere encontrar una persona para el puesto de Developer. Nos podeis ayudar?</div>
        </div>

        <div className='answer'>
           <div className='company-answer'>
           Hola <strong>@hr bot factory!</strong><br/>Te vamos a ayudar a encontrar al candidato ideal. Cuál es el nivel esperado para la posición?
           <Multiple/>
           </div>
        </div>

        <div className='answer'>
          <div className='user'></div>
          <div className='user-answer'>Junior</div>
        </div>

        <div className='answer'>
           <div className='company-answer'>
           Estos son los candidatos que hemos encontrado para ti! 👇
           </div>
           <ListCard profile={users.users} />
        </div>

        <nav className='bottom'><div className='write'></div></nav>
    </div>
    </>
  );
}

export default Chat;
