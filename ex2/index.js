function getFormvalue() {
    // puzzled as to why this does not handle any event
    let firstName = form1.elements['fname'].value;
    console.log(firstName);
    let lastName = form1.elements['lname'].value;
    console.log(lastName);
    // This mainly to pause the debug console to view output
    window.alert(`Submitting form with first name ${firstName}, last name ${lastName}`);
    // submit form
    form1.submit();
}