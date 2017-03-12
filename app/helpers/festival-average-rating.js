import Ember from 'ember';

export function festivalAverageRating(params) {
  var averageRating = params[0].get('averageScore');
  var star = '<i class="fa fa-star" style="display:inline;font-size:20px;font-weight:bold;color:rgb(255, 247, 66)" aria-hidden="true"></i>';
  if (averageRating >= 5) {
    return Ember.String.htmlSafe(star + star + star + star + star);
  } else if (averageRating >= 4) {
    return Ember.String.htmlSafe(star + star + star + star);
  } else if (averageRating >= 3) {
    return Ember.String.htmlSafe(star + star + star);
  } else if (averageRating >= 2) {
    return Ember.String.htmlSafe(star + star);
  } else if (averageRating >= 1) {
    return Ember.String.htmlSafe(star);
  }
}

export default Ember.Helper.helper(festivalAverageRating);
