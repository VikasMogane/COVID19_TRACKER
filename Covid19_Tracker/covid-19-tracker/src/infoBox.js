import React from 'react';
import { card,CardContent, Typography} from "@material-ui/core";

function infoBox({title,cases,total}) {
    return (
        <card class="infoBox">
        <CardContent>

            <Typography class="infoBox__title" color="textSecondary">{title}</Typography>
            <h2  class="infoBox__cases">{cases}</h2>
            <Typography  class="infoBox__total" color="textSecondary">{total} total</Typography>

        </CardContent>
             
        </card>
    )
}

export default infoBox
