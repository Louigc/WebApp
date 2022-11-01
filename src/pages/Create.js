// Kodet af Louise og Sofie
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Switch from "../components/switch";

export const Create = () => {
  const [newName, setNewName] = useState("");
  const [newPrice, setNewPrice] = useState(0);
  const [newCategory, setNewCategory] = useState("");
  const [newPayment, setNewPayment] = useState("");
  const subsCollectionRef = collection(db, "subs");

  const createSub = async () => {
    await addDoc(subsCollectionRef, {
      name: newName,
      price: newPrice,
      category: newCategory,
      payment: newPayment,
    });
  };

  return (
      <div>
        <form className="form-section">
          <h1 className="text-center mt-4 mb-2">Opret abonnement</h1>

          <input
            className="inputfield"
            placeholder="Navn.."
            onChange={(event) => {
              setNewName(event.target.value);
            }}
            required
          ></input>
          <input
            className="inputfield"
            type="number"
            placeholder="Pris.."
            onChange={(event) => {
              setNewPrice(event.target.value);
            }}
            required
          ></input>
          <input
            className="inputfield"
            placeholder="Kategori.."
            onChange={(event) => {
              setNewCategory(event.target.value);
            }}
            required
          ></input>
          <input
            className="inputfield"
            type="date"
            placeholder="Første betaling.."
            onChange={(event) => {
              setNewPayment(event.target.value);
            }}
            required
          ></input>
          <input className="AddIamgeButton" type="file" />
          <button className="UploadImageButton"> Upload dit billede</button>
          
          <br></br><br></br>

          <h5 className="trial">Prøveperiode</h5>
          <Switch />

          <Link to="/">
            <Button
              className="AddSubscriptonButton"
              onClick={createSub}
              required
              value="Refresh Page"
            >
              Tilføj abonnement
            </Button>
          </Link>

        </form>
      </div>
  );
};
