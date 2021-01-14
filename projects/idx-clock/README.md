# Proyecto test de desarrollo Innovadeluxe de la libreria IDX-CLOCK

Correr `npm install @g1770ny/idx-clock` desde la raiz del proyecto para instalar la libreria desde NPM.

Ejemplo

Importar paquete en archivo de modulo:

```ts
...
import { IdxClockModule } from '@g1770ny/idx-clock';
...

@NgModule({
  ...
  imports: [
    ...
    IdxClockModule
  ],
```

Luego en archivo html del componente:

```html
<idx-clock 
    (changeTime)="onChangeTime($event)">
</idx-clock>
```

Para obtener el tiempo actual hacer uso del evento changeTime

```ts
onChangeTime(currTime){
    //El formato de salida esta sujeto a la vista seleccionada 
    //HH:MM:SS Reloj
    //HH:MM:SS.mm Cronómetro
    //HH:MM:SS Cuenta atrás
    console.log(currTime);
}
```
