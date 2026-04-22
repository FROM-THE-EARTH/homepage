<style>
  body {
    width: 540px;
  }

  #outer,#inner {
    border: 2px solid blue;
    padding: 10px;
  }
</style>

<div id="outer">div
  <p id="inner">p</p>
</div>

<script>
  let outer = document.getElementById('outer');
  outer.onmousemove = e => {
    console.log('mousemove target :' + e.target.tagName);
  };
</script>