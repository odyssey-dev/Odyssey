    <h1> Settings </h1>
    <List noHairlinesMd inset>
      <ListInput
        label="Name"
        type="text"
        placeholder="Your name"
      ></ListInput>
  
      <ListInput
        label="E-mail"
        type="email"
        placeholder="E-mail"
      ></ListInput>
  
      <ListInput
        label="URL"
        type="url"
        placeholder="URL"
      ></ListInput>
  
      <ListInput
        label="Password"
        type="password"
        placeholder="Password"
      ></ListInput>
  
      <ListInput
        label="Phone"
        type="tel"
        placeholder="Phone"
      ></ListInput>
  
      <ListInput
        label="Gender"
        type="select"
        >
        <option>Male</option>
        <option>Female</option>
      </ListInput>
  
      <ListInput
        label="Birth date"
        type="date"
        placeholder="Birth day"
        value="2014-04-30"
      ></ListInput>
  
      <ListItem
        title="Toggle"
      >
        <span slot="after">
          <Toggle />
        </span>
      </ListItem>
  
      <ListInput
        label="Range"
        input={false}
      >
        <span slot="after">
          <Range value={50} min={0} max={100} step={1} />
        </span>
      </ListInput>
  
      <ListInput
        type="textarea"
        label="Textarea"
        placeholder="Bio"
      ></ListInput>
      <ListInput
        type="textarea"
        label="Resizable"
        placeholder="Bio"
        resizable
      ></ListInput>
    </List>
  
    <BlockTitle class="theme-dark" >Buttons</BlockTitle>
    <Block strong inset>
      <Row tag="p">
        <Button class="col">Button</Button>
        <Button class="col" fill>Fill</Button>
      </Row>
      <Row tag="p">
        <Button class="col" raised>Raised</Button>
        <Button class="col" raised fill>Raised Fill</Button>
      </Row>
      <Row tag="p">
        <Button class="col" round>Round</Button>
        <Button class="col" round fill>Round Fill</Button>
      </Row>
      <Row tag="p">
        <Button class="col" outline>Outline</Button>
        <Button class="col" round outline>Outline Round</Button>
      </Row>
      <Row tag="p">
        <Button class="col" small outline>Small</Button>
        <Button class="col" small round outline>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button class="col" small fill>Small</Button>
        <Button class="col" small round fill>Small Round</Button>
      </Row>
      <Row tag="p">
        <Button class="col" large raised>Large</Button>
        <Button class="col" large fill raised>Large Fill</Button>
      </Row>
      <Row tag="p">
        <Button class="col" large fill raised color="red">Large Red</Button>
        <Button class="col" large fill raised color="green">Large Green</Button>
      </Row>
    </Block>
  
    <BlockTitle class="theme-dark" >Checkbox group</BlockTitle>
    <List inset>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        checkbox
        name="my-checkbox"
        value="Food"
        title="Food"
      ></ListItem>
    </List>
  
    <BlockTitle class="theme-dark" >Radio buttons group</BlockTitle>
    <List inset>
      <ListItem
        radio
        name="radio"
        value="Books"
        title="Books"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Movies"
        title="Movies"
      ></ListItem>
      <ListItem
        radio
        name="radio"
        value="Food"
        title="Food"
      ></ListItem>
    </List>
    <style>
      h1 {
        display: flex;
        align-self: center;
      }
    </style>


  <script>
    import {
      Page,
      Navbar,
      List,
      ListInput,
      ListItem,
      Toggle,
      BlockTitle,
      Row,
      Button,
      Range,
      Block
    } from 'framework7-svelte';
  </script>
  