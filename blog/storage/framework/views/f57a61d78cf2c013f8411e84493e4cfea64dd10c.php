<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Register</title>
</head>
<body>
  <h1>Buat Account Baru</h1>
  <h2>Sign Up Form</h2>
  <form action="/welcome" method="POST">
    <?php echo csrf_field(); ?>
    <!-- First Name -->
    <label for="firts-name">First Name: </label><br>
    <input type="text" name="first_name"><br><br>

    <!-- Last Name -->
    <label for="last-name">Last Name: </label><br>
    <input type="text" name="last_name"><br><br>

    <!-- Gender -->
    <label>Gender:</label><br>
    <input type="radio" name="gender" value="man">Man<br>
    <input type="radio" name="gender" value="woman">Woman<br>
    <input type="radio" name="gender" value="other">Other<br><br>

    <!-- Nationality -->
    <label for="nationality">Nationality: </label>
    <select name="nationality" id="nationality">
      <option value="indonesian">Indonesian</option>
      <option value="american">American</option>
      <option value="arabian">Arabian</option>
    </select><br><br>

    <!-- Language Spoken -->
    <label>Language Spoken: </label><br>
    <input type="checkbox" name="language" value="bahasa_indonesia">Bahasa Indonesia<br>
    <input type="checkbox" name="language" value="english">English<br>
    <input type="checkbox" name="language" value="arabic">Arabic<br>
    <input type="checkbox" name="language" value="japanese">Japanese<br><br>

    <!-- Bio -->
    <label for="bio">Bio: </label><br>
    <textarea name="bio" id="" cols="30" rows="10"></textarea><br><br>
    <button type="submit">Sign Up</button>
  </form>
</body>
</html><?php /**PATH /home/rizki/Documents/laravel-webdev-sanbarcode/Week 3/Day 2 - Membuat Web Statis dengan Laravel/membuat-web-statis-dengan-laravel/blog/resources/views/register.blade.php ENDPATH**/ ?>