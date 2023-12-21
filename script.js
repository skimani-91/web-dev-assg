function renderContribution() {
  const fieldOfContribution = document.getElementById('fieldOfContribution').value;
  const contributionDescription = document.getElementById('contributionDescription').value;
  
  const renderedInfo = document.getElementById('renderedInfo');
  renderedInfo.innerHTML = `<p><strong>${fieldOfContribution}:</strong> ${contributionDescription}</p>`;
}
