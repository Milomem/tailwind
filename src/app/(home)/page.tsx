import { Control } from "@/components/Form/FileInput/Control";
import { FileList } from "@/components/Form/FileInput/FileList";
import { ImagePreview } from "@/components/Form/FileInput/ImagePreview";
import { Root } from "@/components/Form/FileInput/Root";
import { Trigger } from "@/components/Form/FileInput/Trigger";
import { Select } from "@/components/Form/Select/Index";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { InputControl, InputPrefix, InputRoot } from "@/components/input";
import { SettingsTabs } from "@/components/settingsTabs";
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import { Textarea } from '@/components/Form/Textarea'
import { Button } from '@/components/Button'


export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs/>

      <div className=" mt-6 flex-col flex ">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-700 lg:flex-row lg:items-center">
          <div className=" space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
            </span>
          </div>
          <div className=" flex items-center gap-2">
          <Button variant="outline" type="button">Cancel</Button>
          <Button variant="primary" type="submit" form="settings">Save</Button>
          </div>
        </div>

        <form id="settings" className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700">
        <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label htmlFor="firstName" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Name</label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <InputRoot>
                <InputControl id="firstName" defaultValue="Fellipe"/>
              </InputRoot>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>

                <InputRoot>
                  <InputControl id="lastName" defaultValue="Fernandes" />
                </InputRoot>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Email address</label>

              <InputRoot>
              <InputPrefix>
                <Mail className=" h-5 w-5 text-zinc-500"/>
              </InputPrefix>
                <InputControl id="email" type="email" defaultValue="fellipemilomem@hotmail.com"/>
              </InputRoot>
            
            </div>

            <div className="grid grid-cols-form gap-3 pt-5">
              <label
                htmlFor="photo"
                className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
              >
                Your photo
                <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                  This will be displayed on your profile.
                </span>
              </label>

                <Root className=" flex items-start gap-5">
                  <ImagePreview/>
                  <Trigger/>
                  <Control/>
                </Root>

            </div>
          

            <div className="grid grid-cols-form gap-3 pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >Role</label>

                <InputRoot>
                  <InputControl id="role"  defaultValue="CTO"/>
                </InputRoot>
              
            </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="country" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Country</label>
            <Select placeholder="Select a country...">
              <SelectItem value="br" text="Brazil" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="timeZone" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Timezone</label>
            <Select placeholder="Select a timezone...">
              <SelectItem
                value="utc8"
                text="Pacific Standard Time (UTC-08:00)"
              />
              <SelectItem value="utc3" text="America São Paulo (UTC-03:00)" />
            </Select>
          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
          <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >Bio
            <span className=" text-sm font-normal text-zinc-500 block mt-0.5">Write a short introduction.</span>
            </label>
            
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                <Button type="button" variant="ghost">
                    <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
                  </Button>

                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="h-4 w-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <Textarea
                id="bio"
                defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
              />
            </div>

          </div>

          <div className="grid grid-cols-form gap-3 pt-5">
            <label htmlFor="projects" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">Portfolio projects
            <span className=" text-sm font-normal text-zinc-500 block mt-0.5">Share a few snippets of your work.</span>
            </label>
            <Root>
              <Trigger/>
              <FileList/>
              <Control multiple/>
            </Root>
            
          </div>

          <div className=" flex items-center justify-end gap-2 pt-5">
            <Button variant="outline" type="button">Cancel</Button>
            <Button variant="primary" type="submit" form="settings">Save</Button>
          </div>

        </form>
      </div>
    </>
  )
}
