export const kinderenBuilder = (data) => {
    let content = '<h4>Kinderen</h4><strong>Naam</strong><br/>';
    if (data.kinderen.length > 0) {
        console.log('kinderen > 0');
        data.kinderen.forEach((item) => {
          content += `
          ${item.naam}
          <br/>
        `;
        });
      }
    return content;
  }
  