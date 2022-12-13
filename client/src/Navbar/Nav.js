"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const NavbarScroller = (props) => {
    const { brand, links } = props;
    const NavLinks = () => links.map((link) => <Li key={link.name}><a href={link.to}>{link.name}</a></Li>);
    return (<Navbar>
      <Brand href={brand.to}>{brand.name}</Brand>
      <Ul>
        <NavLinks />
      </Ul>
    </Navbar>);
};
const Theme = {
    colors: {
        bg: `#fff`,
        dark: `#19811E`,
        light: `#EEEEEE`,
        red: `#ff5851`,
    },
    fonts: {
        body: `IBM Plex Sans, sans-serif`,
        heading: `IBM Plex Sans, sans-serif`,
    }
};
const Navbar = styled_components_1.default.nav `
  background: ${Theme.colors.dark};
  font-family: ${Theme.fonts.heading};
  color: ${Theme.colors.light};
  display: flex;
  align-items: center;
  justify-content: space-between;
  a { color: white; text-decoration: none; }`;
const Brand = styled_components_1.default.a `
  font-weight: bold;
  font-style: italic;
  margin-left: 0.5rem;
  padding-right: 0.5rem;`;
const Ul = styled_components_1.default.ul `
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  `;
const Li = styled_components_1.default.li `
  flex: 0 0 auto;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  height: 100%;
  justify-content: center;
  text-decoration: none;
  -webkit-box-align: center;
  -webkit-box-pack: center;
  -webkit-tap-highlight-color: transparent;
  align-items: center;
  color: #999;
  display: flex;
  font-size:15px;
  height: 50px;
  justify-content: center;
  line-height: 16px;
  margin: 0 1.125rem ;
  text-decoration: none;
  white-space: nowrap;`;
exports.default = NavbarScroller;
