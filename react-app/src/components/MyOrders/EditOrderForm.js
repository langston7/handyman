import { useState } from "react"
import { useDispatch } from "react-redux";
import { patchOrder } from "../../store/order";

function EditOrderForm({order}){
  const dispatch = useDispatch();
  const [details, setDetails] = useState(order.details)
  const [show, setShow] = useState(true);

  const updateSetShow = (e) => {
    show ? setShow(false) : setShow(true);
  }
  const updateDetails = (e) => {
    setDetails(e.target.value);
  }

  const handleSubmit = async e => {
    e.preventDefault();

    await dispatch(patchOrder(order.id, details));
    updateSetShow()
  }

  return(
    <div>
      <button className={`order-button ${show ? null : "hidden"}`} onClick={updateSetShow}>
        Edit this message
      </button>
      <textarea
        value={details}
        onChange={updateDetails}
        name="details"
        className={`order-button ${show ? "hidden" : null}`}
      ></textarea>
      <button className={`order-button ${show ? "hidden" : null}`} onClick={handleSubmit}>
        Submit
      </button>
      <button className={`order-button ${show ? "hidden" : null}`} onClick={updateSetShow}>
        Cancel
      </button>
    </div>
  )

}

export default EditOrderForm;
