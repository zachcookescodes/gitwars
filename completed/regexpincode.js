// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN (pin) {
    //  return pin.split().filter(x=> x.match(/\d/g)).length === 4 || pin.split().filter(x=> x.match(/\d/g)).length === 6
      let pinner = pin.match(/\d/g)
      return pin.length === 4 && pinner.length === 4 || pin.length === 6 && pinner.length === 6
    }