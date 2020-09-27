<Page name="home" class="transparent">
  <!-- Top Navbar -->
  <Navbar >
    <NavTitle>Odyssey</NavTitle>
  </Navbar>

  <Block >
    <Row>
      <Col width="100">
        <div class="spacing"></div>
      </Col>
    </Row>
  </Block>

  <Block strong inset>
    <Row>
      <Col width="100">
      <div class="hero-card" >
        <h1 class="hero-card-title">Home Sweet Home, The Wirral</h1>
        <div class="hero-card-info" > 
            <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/2948/2948111.svg" alt="flag">
            <div class="hero-card-text">North West</div> 
            <img class="flag-icons" src="https://www.flaticon.com/svg/static/icons/svg/197/197485.svg" alt="flag">
            <div class="hero-card-text">England</div>
        </div>
       
      </div>
      </Col>
    </Row>
  </Block>


  <!-- <List inset>
    <ListItem link="/about/" title="About"/>
    <ListItem link="/form/" title="Form"/>
  </List> -->

  <Block strong inset>
    <Row>
      <Col width="50">
        <Button fill raised popupOpen="#my-popup">Popup</Button>
      </Col>
      <Col width="50">
        <Button fill raised loginScreenOpen="#my-login-screen">Login Screen</Button>
      </Col>
    </Row>
  </Block>

</Page>

<style>
  .spacing {
    height:40vh;
  }

  .hero-card {

  }

  .hero-card-title{
    margin-top: 8px;
    font-size: 18px;
    font-weight: bolder;
  }

  .hero-card-info {
    display: flex;
    align-items:center;
  }

  .hero-card-text {
    margin-right: 14px;
    font-weight: bolder;
    color: #848484;
  }

  .flag-icons {
    margin-right: 4px;
    height: 16px;
    width: 16px;
  }

</style>

<script>
  import {
    Page,
    Card,
    Navbar,
    NavLeft,
    NavTitle,
    NavTitleLarge,
    NavRight,
    Link,
    Toolbar,
    Block,
    BlockTitle,
    List,
    ListItem,
    Row,
    Col,
    Button
  } from 'framework7-svelte';
</script>