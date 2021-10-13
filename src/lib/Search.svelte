<script lang="ts">
  let name = "";
  const input = function (event: Event) {
    // const target = event.target as HTMLInputElement;
    // target.style.width = target.value.length + 'ch';
  }
</script>

<select>
  <option value="emart" selected>이마트</option>
  <option value="homeplus">홈플러스</option>
  <option value="costco">코스트코</option>
</select>
<input type="text" placeholder="점포명" on:input={input}>

<style>
  select {
    color: #222831;
    background: #EEEEEE;
    font-size: 3rem;
    font-weight: 600;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 0;
    border-bottom: 1px solid #222831;
    border-radius: 0;
    padding: .5rem;
  }

  input {
    color: #222831;
    background: #EEEEEE;
    font-size: 3rem;
    font-weight: 600;
    width: 50%;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: 0;
    border-bottom: 1px solid #222831;
    border-radius: 0;
    padding: .5rem;
  }
</style>