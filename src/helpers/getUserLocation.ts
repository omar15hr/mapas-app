export const getUserLocation = async(): Promise<[ number, number ]> => {

  return new Promise((resolve, reject) => {

    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        resolve([ coords.longitude, coords.latitude ]);
      },
      (error) => {
        alert('Error al obtener la localización');
        console.log(error);
        reject(error);
      },
    )

  });
}