import React from 'react'
import {NotificationManager, NotificationContainer} from 'react-notifications'
import 'react-notifications/lib/notifications.css'

export default function Notificaciones() {


    const lanzarNotificacion = (tipo) => {
        let timeout = 2000;
        let prioridad = true;
        return () => {
            switch (tipo) {
                case 'info':
                    NotificationManager.info("Notificacion info, para mas detalle pulsa aqui", "Titulo", timeout, () => {
                        alert("Ejecutandose funcion callback \n Informacion ampliada")
                    }, prioridad);
                    break;
            }
        }
    }

    return (

        <div>
                <button onClick={lanzarNotificacion('info')}> Notiicacion info</button>
                <div>
                    <NotificationContainer />
                </div>
        </div>

    )
}
