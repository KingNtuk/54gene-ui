import React from "react";
import '../Components/Custom.css';
// import { getSingleItem, storeSingleItem } from "../../utils/storage";
import '../Components/Custom.css'
import Button from "./Buttons";

const Modal = ({closeModal}) => {

  return (
    <div 
    className="modal-container">
      <div className="modal-content p-2">
        <div className="modal-wrapper" id="customer">
          <div className=" header-wrapper d-flex justify-content-between mb-5">
            <h3>Visit any of our 7RiverLabs Lounges to order your test</h3>
            <button 
            className="cart-x"
            onClick={() => closeModal(false)}>
              X
            </button>
          </div>
          <table id="customers">
            <tbody>
            <tr>
              <td className="px-3">7RL Experience Centre</td>
              <td className="">Mondays - Saturdays<br/>09:00-17:00</td>
              <td className="px-3 address">123b, Joel Ogunnaike street, Ikeja GRA</td>

              <td className="px-3">Ikeja</td>
              <td className="px-3">
                <Button title='Get Directions' bgColor='#F2E14F'/>
                {/* <a
                target="_blank"
                href="https://goo.gl/maps/Z4QhzUiqgNExnQ9XA"
                rel="noreferrer"
              >
                Get Directions
              </a> */}
              </td>
            </tr>
            <tr>
              <td className="px-3">7RL Express</td>
              <td className="">Mondays - Saturdays<br/>09:00-17:00</td>
              <td className="px-3 address ">3, Omorinre Johnson Street, Lekki phase 1</td>
              <td className="px-3">Lekki phase 1</td>

             <td className="px-3">
             {/* <a
                target="_blank"
                href="https://goo.gl/maps/9MyMkkJR8LefqCTv6"
                rel="noreferrer"
              >
                Get Directions
              </a> */}
              <Button title='Get Directions' bgColor='#F2E14F'/>
             </td>
            </tr>
            <tr>
              <td className="px-3">7RL Express</td>
              <td className="">Mondays - Saturdays<br/>09:00-17:00</td>
              <td className="px-3 address">1-7 Muri Okunola Victoria Island Lagos State.</td>
              <td className="px-3">Victoria Island</td>
              <td className="px-3">
              {/* <a
                target="_blank"
                href="https://goo.gl/maps/mvfWCNLiioh1JHNQ6"
                rel="noreferrer"
              >
                Get Directions
              </a> */}
              <Button title='Get Directions' bgColor='#F2E14F'/>
              </td>
            </tr>
            <tr>
              <td className="px-3">7RL Express</td>
              <td className="">Mondays -Saturdays<br/>09:00-17:00</td>
              <td className="px-3 address">Skymall, Opposite Blenco supermarket, Sangotedo</td>
              <td className="px-3">Sangotedo</td>
              <td className="px-3">
              {/* <a
                target="_blank"
                href="https://goo.gl/maps/fBX3nXs7FHqcmSLY9"
                rel="noreferrer"
              >
                Get Directions
              </a> */}
              <Button title='Get Directions' bgColor='#F2E14F'/>
              </td>
            </tr>
            <tr>
              <td className="px-3">7RL Express</td>
              <td className="">Mondays - Saturdays<br/>09:00-17:00</td>
              <td className="px-3 address">
                Town square Mall; Plot 8, CMD road, <br/>Magodo Phase II, Opposite
                Magodo Brooks Estate North Gate
              </td>

              <td className="px-3">Magodo</td>
             <td className="px-3">
             {/* <a
                target="_blank"
                href="https://goo.gl/maps/J1EfiySnuQ4fnec19"
                rel="noreferrer">
                Get Directions
              </a> */}
              <Button title='Get Directions' bgColor='#F2E14F'/>
             </td>
            </tr>
            <tr>
              <td className="px-3">7RL Express</td>
              <td className="">Mondays - Saturdays<br/>09:00-17:00</td>
              <td className="px-3 address">
                Moyo House, beside Ibara Police Station, <br/>opposite Ibara Baptist
                Church, Abeokuta, Ogun state
              </td>

              <td className="px-3">Abeokuta</td>
             <td className="px-3">
             {/* <a
                target="_blank"
                href="https://goo.gl/maps/Z4QhzUiqgNExnQ9XA"
                rel="noreferrer"
              >
                Get Directions
              </a> */}
              <Button title='Get Directions' bgColor='#F2E14F'/>
             </td>
            </tr>
            <tr>
              <td className="px-3">7RL Express</td>
              <td className="px-3">Mondays - Saturdays<br/>09:00-17:00</td>
              <td className="px-3 address">Ado- Bayero Mall, Kano</td>
              <td className="px-3">Kano</td>

             <td className="px-3">
             {/* <a
                target="_blank"
                href="https://goo.gl/maps/VgSxDL3gWysMV7Qg9"
                rel="noreferrer"
              >
                Get Directions
              </a> */}
              <Button title='Get Directions' bgColor='#F2E14F' className='button'/>
             </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Modal;
