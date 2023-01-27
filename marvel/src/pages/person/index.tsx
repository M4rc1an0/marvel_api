import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { publicKey, privateKey } from "@/utils/keys";
import md5 from 'md5';

const Person = () => {
    const [searchPerson, setSearchPerson] = useState()
    const router = useRouter()
    const { character } = router.query;
    const time = Number(new Date());
    const hash = md5(time + privateKey + publicKey);

    console.log(character, 'CARA')

    const baseURL = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${character}&ts=${time}&apikey=${publicKey}&hash=${hash}`



    useEffect(() => {
        axios
          .get(baseURL)
          .then((data) => {
            setSearchPerson(data.data.data.results)
          });
    }, []);
    
    console.log(searchPerson, 'searchPerson')

    return (
        <>Testando pagina</>
    );
};

export default Person