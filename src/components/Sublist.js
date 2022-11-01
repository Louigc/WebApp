// Kodet af Louise
import { useState, useEffect } from "react";
import { db } from "../firebase-config";
import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Button } from "react-bootstrap";

export default function Sublist() {
  const [subs, setSubs] = useState([]);
  const subsCollectionRef = collection(db, "subs");

  // Så man kan slette et abonnement. 
  const deleteSubs = async (id) => {
    const subsDoc = doc(db, "subs", id);
    await deleteDoc(subsDoc).then(res=>{
    })
    window.location.reload(false);
  };

  // Så man kan tilføje et abonnement. 
  useEffect(() => {
    const getSubs = async () => {
      const data = await getDocs(subsCollectionRef);
      setSubs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getSubs();
  }, []);

  // Så man kan søge efter et abonnement. 
  const [search, setSearch] = useState("");

  const SearchSubs = (e) => {
    e.preventDefault();
    setSubs(
      subs.filter((subs) =>
          subs.name.toLowerCase().includes(search.toLowerCase()) ||
          subs.category.toLowerCase().includes(search.toLowerCase()) ||
          subs.price.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  const handleChange = () => {};

  return (
    <div className="App">
      <div className="container">
        <h1 className="text-center">Dine abonnementer</h1>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            SearchSubs(e)}}>
          <input
            type="text"
            className="inputField"
            placeholder="Søg..."
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />

          <select className="dropdown" name="colValue" onChange={handleChange}>
            <option>Filter</option>
            <option value="insurance">Forsikring</option>
            <option value="food">Mad</option>
            <option value="sport">Sport</option>
            <option value="streaming">Streaming</option>
            <option value="entertainment">Underholdning</option>
          </select>
        </form>
      </div>

      {subs.map((subs) => {
        return (
          <div className="subField">
            <h1>
              <Button
                sx={{ fontSize: 25 }}
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.888)",
                  border: "none",
                }}
                onClick={() => {
                  deleteSubs(subs.id);
                }}
              >
                <MoreVertIcon style={{ color: "black" }}></MoreVertIcon>
              </Button>{" "}
              &ensp;{subs.name}
            </h1>
            <h2>
              <div className="SubscriptionDetails">
                <div>Betales d. {subs.payment}</div>
                <div>{subs.price} DKK</div>
              </div>
            </h2>
          </div>
        );
      })}
    </div>
  );
}
