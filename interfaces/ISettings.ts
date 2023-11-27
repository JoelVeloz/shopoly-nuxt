import type { ISection } from "./ISection";

export interface ISettings {
    settings?: SettingsClass;
    views?:    Views;
}

export interface SettingsClass {
    business_name?:               string;
    business_phone?:              string;
    business_email?:              null;
    facebook_url?:                null;
    instagram_url?:               null;
    tiktok_url?:                  null;
    ws_message?:                  string;
    privacy_policies?:            null;
    terms_conditions?:            null;
    frontend_web?:                string;
    api?:                         string;
    image_logo?:                  string;
    image_favicon?:               string;
    email_template_welcome_user?: null;
}

export interface Views {
    home?:    Home;
    catalog?: Catalog;
    about?:   About;
    contact?: Contact;
    cart?:    Cart;
}

export interface About {
    sections?: ISection[];
}
export interface Home {
    sections?: ISection[];
}

export interface Catalog {
    sections?: ISection[];
}

export interface Contact {
    sections?: ISection[];
}

export interface Cart {
    sections?: ISection[];
}