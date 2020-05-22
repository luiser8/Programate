import React from 'react';
import CookieConsent from 'react-cookie-consent-notification';

const Cookie = () => {

    return( 
           <CookieConsent
                background={'#000'}
                bottomPosition={true}
                buttonText={'Ok'}
                buttonBackground={'#fff'}
                buttonColor={'#000'}
                buttonFontSize={16}
                color={'#fff'}              
                padding={16}
            >
                Este sitio web utiliza cookies para mejorar el servicio, con fines analíticos y publicitarios. Por favor lea nuestra Política de Cookies. Confirme su consentimiento para el uso de cookies.<a href={'/cookies'} style={{ color: '#fff' }}> Política de cookies</a>
            </CookieConsent>
           );

}

export default Cookie;