import { useState, useEffect, useRef } from 'react'


export const useFetch = ( url ) => {

                const isMounted = useRef( true );
               const [state, setState] = useState({
                               data: null,
                               isLoading: true,
                               error: null
               });

               useEffect( () => {

                                return () => {
                                                isMounted.current = false;
                                };
                }, []);

               useEffect(() => {

                                fetch( url )
                                                .then( res => res.json())
                                                .then( data => {
                                                                if ( isMounted.current ) {
                                                                                setState({
                                                                                                isLoading: false,
                                                                                                error: null,
                                                                                                data
                                                                                });
                                                                };
                                                } );
               }, [url]);

               return state;
}