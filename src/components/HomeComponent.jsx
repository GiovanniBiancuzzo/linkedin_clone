import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getActualProfileAction, getProfilesAction } from "../redux/actions";
import PostFeatureComponent from "./PostFeatureComponent";

const HomeComponent = () => {
    const IDGiovanni = "6328189d6d79a500150902e7"; //mio id
    // aggiungete anche il vostro id cosi vedete il vostro profilo
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(
            "dispatch della action per recuperare i profili e il profilo personale"
        );
        dispatch(getProfilesAction()); // si caricano in store tutti i profili
        dispatch(getActualProfileAction(IDGiovanni)); // in base all'id selezionato, si setta un profilo attuale
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <PostFeatureComponent />;
};

export default HomeComponent;
