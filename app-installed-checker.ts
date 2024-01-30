import CheckPackageInstallation from "./android";

const AppInstalledChecker = {
	checkPackageName(packageName: string) {
		return new Promise((resolve) => CheckPackageInstallation.isPackageInstalled(packageName, (isInstalled: boolean) => resolve(isInstalled)));
	},
};

export default AppInstalledChecker;
