import appConfigs from "@/configs/appConfigs";

declare module "vue" {
	interface ComponentCustomProperties {
		$appConfigs: typeof appConfigs;
	}
}
