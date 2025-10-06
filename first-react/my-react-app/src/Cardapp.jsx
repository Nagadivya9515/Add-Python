import contacts from './contacts.js';
import Card from './card.jsx'

function Cardapp() {
    return (
        <>
        <Card 
        name={contacts[0].name}
        img={contacts[0].img}
        phone = {contacts[0].phone}
        email={contacts[0].email}
        />

        <Card
        name={contacts[1].name}
        img={contacts[0].img}
        phone={contacts[1].phone}
        email={contacts[1].email}
        />

        <Card
        name={contacts[2].name}
        img={contacts[0].img}
        phone={contacts[2].phone}
        email={contacts[2].email}
        />
        </>
    )
}

export default Cardapp;