  </main>

  <footer class="footer">
    
    <a target="_blank" href="https://www.instagram.com/swissdesignawards" target="_blank">Follow us</a>
    
    <a target="_blank" href="https://admin.us19.list-manage.com/subscribe?u=e9dc04c185ae8e87a7152bca5&id=2d7f1db1b8">newsletter</a>

  </footer>

  <div class="notifications">
    <?php
    $url = 'http://' . $_SERVER['SERVER_NAME'] . $_SERVER['REQUEST_URI'];
    
    
    if (strpos($url,'filter:') !== false) { ?>
    
      <?php
      $field = param('filter');
      ?>
    <a href="/" class="filterBar">
      <span>
        <?php
          $fields = array(
            "fashionandtextile" => "Fashion + Textile Design",
            "product" => "Product Design",
            "mediation" => "Mediation",
            "photography" => "Photography",
            "scenography" => "Scenography",
            "graphic" => "Graphic Design"
          );
          if (array_key_exists($field, $fields)) { 
            echo $fields[$field];
          } else {
            echo "Filtering results";
          }
        ?>
      </span>
    </a>
    
    <?php }
    ?>
      
    <div class="cookies">
      <span>swissdesignawardsblog.ch uses cookies. <a href="#">got&nbsp;it</a>.</span>
    </div>
  </div>
  
  <script src="https://unpkg.com/infinite-scroll@4/dist/infinite-scroll.pkgd.min.js"></script>
  
  <?= js([
	'assets/js/scripts.js',
	'@auto'
  ]) ?>

</body>
</html>
