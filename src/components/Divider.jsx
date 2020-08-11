import React from 'react';

const Divider = () => {

    return (
        <div className="container-divide">
            <h1 className="divider-text">
                <svg width="1em" height="1.4em" viewBox="0 0 16 8" class="bi bi-map" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M15.817.613A.5.5 0 0 1 16 1v13a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 14.51l-4.902.98A.5.5 0 0 1 0 15V2a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0l4.902.98 4.902-.98a.5.5 0 0 1 .415.103zM10 2.41l-4-.8v11.98l4 .8V2.41zm1 11.98l4-.8V1.61l-4 .8v11.98zm-6-.8V1.61l-4 .8v11.98l4-.8z"/>
                </svg>
                &nbsp;LOCATED IN LOS ANGELES, CA
            </h1>
        </div>
    );
}

export default Divider;