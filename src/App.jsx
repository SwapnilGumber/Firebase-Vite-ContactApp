import Navbar from './components/Navbar'
import { FaSearch } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { useState,useEffect } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';
import AddAndUpdate from './components/AddAndUpdate'
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import NoContact from './components/NoContact';


function App() {
  const [contacts, setContacts] = useState([]);
  const {isOpen,onClose,onOpen} = useDisclouse(false);

  useEffect(() => {
    const getContacts = async () =>{
      try{
        const contactsRef = collection(db,"contacts");
        
        onSnapshot(contactsRef,(snapshot)=>{
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data()
            };
          });
          setContacts(contactLists);
          return contactLists;
        })
        
      } catch(error){
        console.log(error);
      }
    }
    getContacts();
  },[]);
  
  const filterContacts = (e)=>{
    const value = e.target.value;
    const contactsRef = collection(db,"contacts");
    
    onSnapshot(contactsRef,(snapshot)=>{
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data()
        };
      });

        const filteredContacts = contactLists.filter(contact=>
          contact.name.toLowerCase().includes(value.toLowerCase()));

        setContacts(filteredContacts);
        return filteredContacts;
      });
    }
  return (
    <>
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
        <div className='flex '>
          <div className='relative flex flex-grow items-center'>
            <FaSearch className='text-white ml-2 text-3xl absolute'/>
            <input 
              onChange={filterContacts}
              type="text" 
              className='pl-10 text-white flex-grow h-10 border bg-transparent rounded-md'/>
          </div>
            <FaPlusCircle onClick={onOpen} className='text-5xl cursor-pointer text-white'/>
        </div>
      <div className='mt-4 gap-3 flex flex-col'>
        {contacts.length <= 0 ? <NoContact/> : contacts.map((contact)=>(
            <ContactCard key={contact.id} contact={contact}/>
        ))}
      </div>
    </div>
    <AddAndUpdate onClose={onClose} isOpen={isOpen}/>
    <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App
