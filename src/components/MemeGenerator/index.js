import {Component} from 'react'

import {
  MainContainer,
  ResponsiveContainer,
  FormContainer,
  Heading,
  Input,
  Label,
  Select,
  Option,
  Button,
  Image,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    topTextInput: '',
    bottomTextInput: '',
    imageUrlInput: '',
    activeFontSizeId: fontSizesOptionsList[0].optionId,
    topText: '',
    bottomText: '',
    imageUrl: '',
    fontSize: '',
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {
      activeFontSizeId,
      topTextInput,
      bottomTextInput,
      imageUrlInput,
    } = this.state

    if (
      activeFontSizeId !== '' &&
      topTextInput !== '' &&
      bottomTextInput !== '' &&
      imageUrlInput !== ''
    ) {
      this.setState({
        imageUrl: imageUrlInput,
        topText: topTextInput,
        bottomText: bottomTextInput,
        fontSize: activeFontSizeId,
      })
    }
  }

  onChangeImageUrl = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeFontSize = event => {
    this.setState({activeFontSizeId: event.target.value})
  }

  renderMeme = () => {
    const {topText, bottomText, imageUrl, fontSize} = this.state
    return (
      <Image data-testid="meme" bgImage={imageUrl}>
        <Text textSize={fontSize}> {topText} </Text>
        <Text textSize={fontSize}> {bottomText} </Text>
      </Image>
    )
  }

  render() {
    const {
      topTextInput,
      bottomTextInput,
      imageUrlInput,
      activeFontSizeId,
    } = this.state

    return (
      <MainContainer>
        <ResponsiveContainer>
          <FormContainer onSubmit={this.onSubmitForm}>
            <Heading> Meme Generator </Heading>
            <Label htmlFor="Image"> Image URL </Label>
            <Input
              id="Image"
              type="text"
              placeholder="Enter the Image URL"
              value={imageUrlInput}
              onChange={this.onChangeImageUrl}
            />

            <Label htmlFor="topText"> Top Text </Label>
            <Input
              id="topText"
              type="text"
              placeholder="Enter the Top Text"
              value={topTextInput}
              onChange={this.onChangeTopText}
            />

            <Label htmlFor="bottomText"> Bottom Text </Label>
            <Input
              id="bottomText"
              type="text"
              placeholder="Enter the Bottom Text"
              value={bottomTextInput}
              onChange={this.onChangeBottomText}
            />

            <Label htmlFor="select"> Font Size </Label>
            <Select
              as="select"
              id="select"
              value={activeFontSizeId}
              onChange={this.onChangeFontSize}
            >
              {fontSizesOptionsList.map(item => (
                <Option key={item.optionId}> {item.displayText} </Option>
              ))}
            </Select>

            <Button type="submit"> Generate </Button>
          </FormContainer>

          {this.renderMeme()}
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default MemeGenerator
